This is a starter template for [Ionic](http://ionicframework.com/docs/) projects.

## How to use this template

*This template does not work on its own*. The shared files for each starter are found in the [ionic2-app-base repo](https://github.com/ionic-team/ionic2-app-base).

To use this template, either create a new ionic project using the ionic node.js utility, or copy the files from this repository into the [Starter App Base](https://github.com/ionic-team/ionic2-app-base).

### With the Ionic CLI:

Take the name after `ionic2-starter-`, and that is the name of the template to be used when using the `ionic start` command below:

```bash
$ sudo npm install -g ionic cordova
$ ionic start myTabs tabs
```

Then, to run it, cd into `myTabs` and run:

```bash
$ ionic cordova platform add ios
$ ionic cordova run ios
```

Substitute ios for android if not on a Mac.

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

### Release a mandatory update with a changelog
code-push release-cordova MyApp-ios ios -m --description "Modified the header color"

### Release a dev Android build to just 1/4 of your end users
code-push release-cordova MyApp-Android android --rollout 25%

### Release an update that targets users running any 1.1.* binary, as opposed to
### limiting the update to exact version name in the config.xml file
code-push release-cordova MyApp-Android android --targetBinaryVersion "~1.1.0"

### Release the update now but mark it as disabled
### so that no users can download it yet
code-push release-cordova MyApp-ios ios -x


