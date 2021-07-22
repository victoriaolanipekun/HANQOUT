from comments.serializers.common import CommentSerializer
from .common import HanqoutSerializer

class PopulatedHanqoutSerializer(HanqoutSerializer): # pass Hanqout object through
    comments = CommentSerializer(many=True) # addin a comments field to the Hanqout object 