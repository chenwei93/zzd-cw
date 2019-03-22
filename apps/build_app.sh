#!/bin/sh

echo "确定已经更新了当前项目的代码和Production的代码？[y/n]"
read confirm
if [ $confirm = 'y' ]; then
   sencha app clean && sencha app build --clean -l zh_CN production
fi

echo "是否发布产品到版本库？[y/n]"
read confirm
if [ $confirm = 'y' ]; then
   cd ~/project/dcsp/apps/build/production && git add . && git commit -am "自动发布新版本" && git push && git status
fi
