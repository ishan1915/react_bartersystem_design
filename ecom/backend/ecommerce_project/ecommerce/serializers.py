from rest_framework import serializers
from .models import Item,FormData,Category
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import OutstandingToken
from rest_framework_simplejwt.tokens import OutstandingToken
from rest_framework_simplejwt.token_blacklist.models import BlacklistedToken


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__' 


class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = ['id', 'title', 'description', 'price','image']  # Do NOT include 'user' here

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email']

class LogoutSerializer(serializers.Serializer):
    refresh = serializers.CharField()

    def validate_refresh(self, value):
        """Validate that the refresh token is valid."""
        try:
            OutstandingToken.objects.get(token=value)
        except OutstandingToken.DoesNotExist:
            raise serializers.ValidationError("Invalid refresh token.")
        return value

    def save(self):
        """Blacklist the refresh token to log the user out."""
        refresh = self.validated_data['refresh']
        BlacklistedToken.objects.create(token=refresh)    


class FormDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = FormData
        fields = '__all__'