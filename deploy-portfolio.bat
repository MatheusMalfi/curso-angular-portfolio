@echo off
setlocal

for %%I in ("%~dp0.") do set "APP_DIR=%%~fI"
for %%I in ("%APP_DIR%..\..\..") do set "DESKTOP_DIR=%%~fI\"
set "PAGES_DIR=%DESKTOP_DIR%MatheusMalfi.github.io"
set "BUILD_DIR=%APP_DIR%\dist\curso-angular-portfolio\browser"
set "DEFAULT_COMMIT_MESSAGE=Atualiza portfolio publicado"

if not exist "%APP_DIR%" (
  echo Pasta do projeto nao encontrada:
  echo %APP_DIR%
  goto :error
)

if not exist "%PAGES_DIR%" (
  echo Pasta do repositorio publicado nao encontrada:
  echo %PAGES_DIR%
  goto :error
)

set /p "COMMIT_MESSAGE=Mensagem do commit [%DEFAULT_COMMIT_MESSAGE%]: "
if "%COMMIT_MESSAGE%"=="" set "COMMIT_MESSAGE=%DEFAULT_COMMIT_MESSAGE%"

echo ===============================
echo Build do portfolio
echo ===============================
pushd "%APP_DIR%" || goto :error
call npx ng build --base-href /
if errorlevel 1 goto :error
popd

if not exist "%BUILD_DIR%" (
  echo Pasta de build nao encontrada:
  echo %BUILD_DIR%
  goto :error
)

echo.
echo ===============================
echo Limpando repositorio publicado
echo ===============================
pushd "%PAGES_DIR%" || goto :error

for /f "delims=" %%i in ('dir /b /a') do (
  if /i not "%%i"==".git" (
    if exist "%%i\" (
      rmdir /s /q "%%i"
    ) else (
      del /f /q "%%i"
    )
  )
)

echo.
echo ===============================
echo Copiando build novo
echo ===============================
xcopy "%BUILD_DIR%\*" "%PAGES_DIR%\" /E /H /C /I /Y >nul
if errorlevel 1 goto :error

echo.
echo ===============================
echo Publicando no GitHub
echo ===============================
git add .
git diff --cached --quiet
if not errorlevel 1 goto :no_changes

git commit -m "%COMMIT_MESSAGE%"
if errorlevel 1 goto :error

git push
if errorlevel 1 goto :error
popd

echo.
echo ===============================
echo Publicacao concluida
echo Link: https://matheusmalfi.github.io/
echo ===============================
start "" "https://matheusmalfi.github.io/"
goto :eof

:no_changes
echo.
echo ===============================
echo Nenhuma alteracao encontrada para publicar.
echo Link atual: https://matheusmalfi.github.io/
echo ===============================
popd
start "" "https://matheusmalfi.github.io/"
goto :eof

:error
echo.
echo Ocorreu um erro durante o processo.
exit /b 1