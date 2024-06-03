from django.http import HttpResponse

# Create your views here.

def default(request):
    return HttpResponse("<h3>This is our Home Page.</h3>")