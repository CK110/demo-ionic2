## 图标大小

- icon: 1024*1024
- splash启动画面文件:2732*2732

```
$ ionic cordova resources --icon
$ ionic cordova resources --splash

```

```
<preference name="FadeSplashScreen" value="false"/>
<preference name="AutoHideSplashScreen" value="false"/>
```

```
cordova plugin add cordova-plugin-baidumaplocation --variable ANDROID_KEY="SFG1rDM4Bdz0uXb5GtHKky809U4nVk2w" --variable IOS_KEY="0hTjBKQnfxQwq3HAHivgvl0bs6LLrqtI"

```

## 常用命令
```bash
$ ionic generate 
$ ionic generate component
$ ionic generate directive
$ ionic generate page
$ ionic generate pipe
$ ionic generate provider
$ ionic generate tabs
$ ionic generate component foo
$ ionic generate page Login
$ ionic generate pipe MyFilterPipe
```

## 热更新命令
```bash
code-push release-cordova ZJFTOA-iOS ios
code-push release-cordova ZJFTOA-Android android

code-push release-cordova  ZJFTOA-iOS ios -d Production #发布到code-push-server ios


code-push deployment ls ZJFTOA-iOS -k // 查看
```

