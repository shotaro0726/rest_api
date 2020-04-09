from django.urls import path
from django.views.generic import TemplateView

from . import views

app_name = 'rest'

urlpatterns = [
    path("", views.RestListApiView.as_view(),name='rest'),
]