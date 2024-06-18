from django.urls import path
from . import views
from .views import UserRegister
from .views import UserLogin
from .views import UserLogout
from .views import UserView


urlpatterns = [
	path('register', views.UserRegister.as_view(), name='register'),
	path('login', views.UserLogin.as_view(), name='login'),
	path('logout', views.UserLogout.as_view(), name='logout'),
	path('user', views.UserView.as_view(), name='user'),
 
]