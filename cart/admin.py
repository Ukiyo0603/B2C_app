from django.contrib import admin
from .models import User, Cart, DeliveryCost, Cartitems

admin.site.register(User)
admin.site.register(Cart)
admin.site.register(DeliveryCost)
admin.site.register(Cartitems)