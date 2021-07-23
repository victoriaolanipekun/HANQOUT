from comments.serializers.common import CommentSerializer
from categories.serializers.common import CategorySerializer
from locations.serializers.common import LocationSerializer
from .common import HanqoutSerializer

class PopulatedHanqoutSerializer(HanqoutSerializer): # pass Hanqout object through
    comments = CommentSerializer(many=True) # adding a comments field to the Hanqout object 
    categories = CategorySerializer(many=True) # adding a categories field to the Hanqout object
    locations = LocationSerializer(many=True) # adding a locations field to the Hanqout object