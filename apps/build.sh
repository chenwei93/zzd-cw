#!/bin/sh

echo "是否从获取最新版本源码？[y/n]"
read confirm
if [ $confirm = 'y' ]; then
   cd ~/project/dcsp/apps/ && git pull
   cd ~/project/dcsp/apps/build/production && git pull
fi

cd ~/project/dcsp/apps/rbase && sencha app clean && sencha app build --clean -l zh_CN production
cd ~/project/dcsp/apps/drdms && sencha app clean && sencha app build --clean -l zh_CN production
cd ~/project/dcsp/apps/ap && sencha app clean && sencha app build --clean -l zh_CN production
#cd ~/project/dcsp/apps/starter && sencha app clean && sencha app build --clean -l zh_CN production


echo "是否发布产品到版本库？[y/n]"
read confirm
if [ $confirm = 'y' ]; then
   cd ~/project/dcsp/apps/build/production && git add . && git commit -am "自动发布新版本" && git push && git status
fi
