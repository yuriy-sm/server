from django.shortcuts import render
from django.http import HttpResponseRedirect
from .forms import AboutForm
from rest_framework import viewsets
from .serializers import MangoAboutSerializer
from .models import MangoAbout
from rest_framework.filters import SearchFilter, OrderingFilter



# Create your views here.


def add_about(request):
    submitted = False
    if request.method == 'POST':
        form = AboutForm(request.POST)
        if form.is_valid():
            form.save()
            return HttpResponseRedirect('/about/?submitted=True')
    else:
        form = AboutForm()
        if 'submitted' in request.GET:
            submitted = True

    return render(request, 'about.html',
        {'form': form, 'thank you for submittin our form': submitted})


def instruction(request):
    return render(request, 'Instructions.html')


def search(request):
    return render(request, 'Index.html')


def addproject(request):
    return render(request, 'AddProject.html')


class MangoAboutViewSet(viewsets.ModelViewSet):
    queryset = MangoAbout.objects.all()
    serializer_class = MangoAboutSerializer
    filter_backends = (SearchFilter, OrderingFilter)
    search_fields = ['name', 'email', 'message']
