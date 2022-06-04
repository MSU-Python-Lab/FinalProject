from rest_framework import routers

from . import viewsets
#create an object of the router class and register the viewset
router = routers.DefaultRouter()
router.register('', viewsets.CustomUserModelViewSet)