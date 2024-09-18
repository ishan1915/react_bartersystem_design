from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import FormDataViewSet

router = DefaultRouter()
router.register(r'formdata', FormDataViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
