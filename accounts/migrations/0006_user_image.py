# Generated by Django 5.1 on 2024-10-31 04:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0005_rename_idsocialmedia_usersocialmedia_socialmedia_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='image',
            field=models.ImageField(default='images/default-avatar.jpg', upload_to='images'),
        ),
    ]
