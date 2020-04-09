from django.db import models

class Rest(models.Model):
    Rest = (('出席','出席'),('欠席','欠席'),)
    name = models.CharField(verbose_name='名前', max_length=50, unique=True)
    rest = models.CharField(verbose_name='出欠',max_length=2,choices=Rest)
    created_at = models.DateTimeField(verbose_name='作成日時',auto_now_add=True)
    update_at = models.DateTimeField(verbose_name='更新日時',auto_now=True)

    class Meta:
        verbose_name = 'Rest'

        def __str__(self):
                return self.name
