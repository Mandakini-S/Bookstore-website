from rest_framework import serializers  
from .models import Customer  
  
class CustomerSerializer(serializers.ModelSerializer):  
    first_name = serializers.CharField(max_length=200, required=True)  
    last_name = serializers.CharField(max_length=200, required=True)  
    address = serializers.CharField(max_length=200, required=True)  
    mobile = serializers.CharField(max_length=10, required=True)  
  
    class Meta:  
        model = Customer
        fields = ('__all__')  