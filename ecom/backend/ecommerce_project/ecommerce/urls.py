from django.urls import include, path
from .views import UserRegisterView, UserLoginView, ItemViewSet,FormDataViewSet,CategoryViewSet,LogoutView
from rest_framework.routers import DefaultRouter
from django.conf.urls.static import static
from django.conf import settings


router = DefaultRouter()
router.register(r'items', ItemViewSet, basename='items')
router.register(r'formdata', FormDataViewSet)
router.register(r'categories', CategoryViewSet)



urlpatterns = [
    path('register/', UserRegisterView.as_view({'post': 'create'}), name='register'),
    path('login/', UserLoginView.as_view({'post': 'create'}), name='login'),
    path('logout/', LogoutView.as_view({'post': 'create'}), name='logout'),

    path('', include(router.urls)),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)



if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)