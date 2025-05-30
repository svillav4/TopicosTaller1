# Generated by Django 5.1 on 2024-09-01 20:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('roadMap', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Step',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('step', models.CharField(max_length=100)),
                ('checked', models.BooleanField()),
                ('idRoadMap', models.BooleanField()),
            ],
        ),
        migrations.RenameField(
            model_name='roadmap',
            old_name='idUser',
            new_name='username',
        ),
    ]
