from rest_framework.generics import ListAPIView
from  .models import Rest
from .serializers import RestSerializer

class RestListApiView(ListAPIView):
    queryset = Rest.objects.all()
    serializer_class = RestSerializer
