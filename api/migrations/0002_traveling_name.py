# Generated by Django 3.2.12 on 2023-07-01 14:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='traveling',
            name='name',
            field=models.CharField(default=0, max_length=20),
            preserve_default=False,
        ),
    ]
