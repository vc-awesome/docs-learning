@ECHO OFF
SETLOCAL

FOR /F tokens^=2^ delims^=^" %%a IN ('REG QUERY "HKEY_CLASSES_ROOT\Applications\Typora.exe\shell\open\command"') DO (
  SET my_exe=%%a
)
START "dummyclient" "%my_exe%" "%~dp0\"

ENDLOCAL


:: 方式一
REM @ECHO OFF
REM ECHO Start APP Typora
REM REM D: && cd Program Files\Typora && Typora.exe E:\vc_service\syncthing

REM START "dummyclient" "D:\Program Files\Typora\Typora.exe" "E:\vc_service\docs-learning\docs-learning"

REM ECHO successfully open the App

REM REM PAUSE>NUL


:: 方式二
 :: https://cloud.tencent.com/developer/ask/sof/89743 - 如何在批处理脚本中找到应用程序的完整路径 - 问答 - 腾讯云开发者社区-腾讯云（已采纳部分）
 :: https://blog.csdn.net/qq_38428623/article/details/121712795 - 【bat】获取软件安装目录_比嗨皮兔的博客-CSDN博客_批处理获取软件安装目录
REM @ECHO OFF
REM SETLOCAL

REM FOR /F tokens^=2^ delims^=^" %%a IN ('REG QUERY "HKEY_CLASSES_ROOT\Applications\Typora.exe\shell\open\command"') DO (
  REM SET my_exe=%%a
REM )
REM echo %my_exe%

:: https://blog.csdn.net/hongkaihua1987/article/details/104560108 - bat中获取当前路径_Finder_Way的博客-CSDN博客_bat获取当前路径
 :: 当前bat文件路径 echo %~dp0
REM START "dummyclient" "%my_exe%" "%~dp0\"

REM ENDLOCAL

REM REM PAUSE>NUL
