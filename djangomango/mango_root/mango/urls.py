from django.urls import path
from django.conf.urls import include
from rest_framework import routers
from . import views


router = routers.DefaultRouter()
router.register(r'MangoAbout', views.MangoAboutViewSet)


urlpatterns = [
    path('', views.search, name='search'),
    path('addproject/', views.addproject, name='addproject'),
    path('instructions/', views.instruction, name='instruction'),
    path('about/', views.add_about, name='about_list'),
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]
