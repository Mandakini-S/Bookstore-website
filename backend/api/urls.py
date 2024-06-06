# sample_app/urls.py
from django.urls import path
from .views import CustomerView

urlpatterns = [
    path('customer/', CustomerView.as_view(), name='customer-list'),
    path('customer/<int:id>/', CustomerView.as_view()),
    path('customer/<int:id>/update/ ', CustomerView.as_view())
]
