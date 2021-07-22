from django.urls import path
from .views import HanqoutListView

urlpatterns = [
    path('', HanqoutListView.as_view())
]