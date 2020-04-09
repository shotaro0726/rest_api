from rest_framework.serializers import ModelSerializer
from .models import Rest

class RestSerializer(ModelSerializer):
    class Meta:
        model = Rest
        fields = ('name','rest',)