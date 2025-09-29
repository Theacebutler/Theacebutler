from django.shortcuts import render
from django.views import View

# Create your views here.

class HomeView(View):
    def get(self, requset):
        return render(requset, 'home.html')