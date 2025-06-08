# Title 打开 docs-learning 文件夹

Echo start

# 打开文件夹
open -a /Applications/Typora.app/ /Users/caiyongwen/docs-learning/

# 关闭当前活动终端窗口
#osascript -e "tell application \"System Events\" to keystroke \"W\" using command down"
osascript -e "tell application \"Terminal\" to close front window" &  end tell

# 退出终端，关闭所有终端窗口
#osascript -e 'tell application "Terminal" to quit' & exit
