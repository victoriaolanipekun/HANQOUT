from django.urls import path
from .views import HanqoutListView, HanqoutDetailView, HanqoutLocation, HanqoutCategory

urlpatterns = [
    path('', HanqoutListView.as_view()),
    path('locations/<int:pk>/', HanqoutLocation.as_view()),
    path('categories/<int:pk>/', HanqoutCategory.as_view()),
    path('<int:pk>/', HanqoutDetailView.as_view())
]