from django.http import JsonResponse

# Create your views here.

def home(request):
    return JsonResponse({'Info': 'React and Django Ecommerce website',"name":"Mandakini"})