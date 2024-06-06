from django.shortcuts import render  
from rest_framework.views import APIView  
from rest_framework.response import Response  
from rest_framework import status  
from .models import Customer 
from .serializers import CustomerSerializer  
from django.shortcuts import get_object_or_404  
# Create your views here.  
  
class CustomerView(APIView):  
  
    def get(self, request, id):  
        result = Customer.objects.get(id=id)  
        if id:  
            serializers = CustomerSerializer(result)  
            return Response({'success': 'success', "customer":serializers.data}, status=200)  
  
        result = Customer.objects.all()  
        serializers = CustomerSerializer(result, many=True)  
        return Response({'status': 'success', "customer":serializers.data}, status=200)  
  
    def post(self, request):  
        serializer = CustomerSerializer(data=request.data)  
        if serializer.is_valid():  
            serializer.save()  
            return Response({"status": "success", "data": serializer.data}, status=status.HTTP_200_OK)  
        else:  
            return Response({"status": "error", "data": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)  
  
    def patch(self, request, id):  
        result = Customer.objects.get(id=id)  
        serializer = CustomerSerializer(result, data = request.data, partial=True)  
        if serializer.is_valid():  
            serializer.save()  
            return Response({"status": "success", "data": serializer.data})  
        else:  
            return Response({"status": "error", "data": serializer.errors})  
  
    def delete(self, request, id=None):  
        result = get_object_or_404(Customer, id=id)  
        result.delete()  
        return Response({"status": "success", "data": "Record Deleted"})  