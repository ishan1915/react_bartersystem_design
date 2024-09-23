from django.urls import include, path
from .views import UserRegisterView, UserLoginView, ItemViewSet,FormDataViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r'items', ItemViewSet, basename='items')
router.register(r'formdata', FormDataViewSet)


urlpatterns = [
    path('register/', UserRegisterView.as_view({'post': 'create'}), name='register'),
    path('login/', UserLoginView.as_view({'post': 'create'}), name='login'),
    path('', include(router.urls)),
]
