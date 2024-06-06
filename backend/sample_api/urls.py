# sample_app/urls.py
from django.urls import path
from .views import StudentView

urlpatterns = [
    path('students/', StudentView.as_view(), name='student-list'),
    path('students/<int:id>/', StudentView.as_view()),
    path('students/<int:id>/update/ ', StudentView.as_view())
]
