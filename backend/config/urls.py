from django.contrib import admin
from django.urls import path, include
from todo.health import health

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/", include("todo.urls")),
    path("health/", health),
]
