PATH=%PATH%;C:\Qt\5.12.1\mingw73_64\bin;C:\Qt\Tools\mingw730_64\bin

lupdate ..\sakura.pro -ts ..\translations\sakura_ru.src.ts
lupdate ..\qml        -ts ..\translations\sakura_ru.qml.ts

lupdate ..\sakura.pro -ts ..\translations\sakura_de.src.ts
lupdate ..\qml        -ts ..\translations\sakura_de.qml.ts

lupdate ..\sakura.pro -ts ..\translations\sakura_fr.src.ts
lupdate ..\qml        -ts ..\translations\sakura_fr.qml.ts

lupdate ..\sakura.pro -ts ..\translations\sakura_it.src.ts
lupdate ..\qml        -ts ..\translations\sakura_it.qml.ts

lupdate ..\sakura.pro -ts ..\translations\sakura_es.src.ts
lupdate ..\qml        -ts ..\translations\sakura_es.qml.ts

lupdate ..\sakura.pro -ts ..\translations\sakura_zh.src.ts
lupdate ..\qml        -ts ..\translations\sakura_zh.qml.ts

lupdate ..\sakura.pro -ts ..\translations\sakura_ja.src.ts
lupdate ..\qml        -ts ..\translations\sakura_ja.qml.ts

lupdate ..\sakura.pro -ts ..\translations\sakura_ko.src.ts
lupdate ..\qml        -ts ..\translations\sakura_ko.qml.ts

lconvert ..\translations\sakura_ru.src.ts ..\translations\sakura_ru.qml.ts -o ..\translations\sakura_ru.ts
lconvert ..\translations\sakura_de.src.ts ..\translations\sakura_de.qml.ts -o ..\translations\sakura_de.ts
lconvert ..\translations\sakura_fr.src.ts ..\translations\sakura_fr.qml.ts -o ..\translations\sakura_fr.ts
lconvert ..\translations\sakura_it.src.ts ..\translations\sakura_it.qml.ts -o ..\translations\sakura_it.ts
lconvert ..\translations\sakura_es.src.ts ..\translations\sakura_es.qml.ts -o ..\translations\sakura_es.ts
lconvert ..\translations\sakura_zh.src.ts ..\translations\sakura_zh.qml.ts -o ..\translations\sakura_zh.ts
lconvert ..\translations\sakura_ja.src.ts ..\translations\sakura_ja.qml.ts -o ..\translations\sakura_ja.ts
lconvert ..\translations\sakura_ko.src.ts ..\translations\sakura_ko.qml.ts -o ..\translations\sakura_ko.ts
