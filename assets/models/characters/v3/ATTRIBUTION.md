# 山河問道四位旅人：來源與修改紀錄

查核日期：2026-09-11。`shen.glb`（沈行舟）、`cheng.glb`（阿澄）、`heng.glb`（小衡）、`zhiqiu.glb`（知秋）使用以下人體與衣髮資產，再由本專案以 Blender 適配、改裝及製作動畫。這是教學遊戲原型；沒有使用《逆水寒》遊戲資產。

## 人體、皮膚、眼睛、眉睫與骨架

MakeHuman／MPFB 核心資產，CC0 1.0。來源及逐檔名稱見[上一層來源紀錄](../ATTRIBUTION.md)，[官方授權](https://github.com/makehumancommunity/mpfb2/blob/master/LICENSE.ASSETS.md)。工具程式授權與匯出資產授權分開。

## 衣袍

**F_Kimono／mindfront_kimono，Mindfront**，CC0 1.0。來源：[MakeHuman dress01 官方清單](https://static.makehumancommunity.org/assets/assetpacks/dress01.html)，[原始素材包](https://files.makehumancommunity.org/asset_packs/dress01/dress01_cc0.zip)。官方清單及下載檔內授權一致。

修改：以三頂點對應方式適配人體，重作衣物骨架權重，調整衣色、交領、腰封、內襯及袖形，製作遊戲使用的 GLB。保留原衣料拓樸與 UV 皺褶；本作是虛構江湖服裝，不宣稱原素材為漢服或歷史服制復原。

## 髮片

**Long01／o4saken_long01，04saken；官方素材包另標示 punkduck**。四位人物使用此來源的衍生髮片。來源：[MakeHuman hair01 官方清單](https://static.makehumancommunity.org/assets/assetpacks/hair01.html)，[原始素材包](https://files.makehumancommunity.org/asset_packs/hair01/hair01_cc0.zip)。

下載的 `.mhclo` 檔內明列 **Creative Commons Attribution 4.0 International（CC BY 4.0）**，本案依該授權保留署名、來源、條款及修改說明，未以素材包檔名的 CC0 概括。授權：[CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)。修改：適配頭型、髮束位置與長度、自然黑棕色、反光與透明材質，綁定頭部骨架並封裝至 GLB。作者未對本遊戲提供背書。

**Straight bangs／cortu_straight_bangs，Cortu Johnstone**（CC0 1.0）曾作為阿澄髮型候選，造型不適合後未採用；檔案只留本機研究紀錄，不包含在最終四個模型中。

RehmanPolanski hair bun 因官方包清單與內嵌授權衝突，未採用。其他搜尋候選與未採用原檔只留在本機研究資料夾，未發布。

## 原創處理與規格

腰封、配件、衣領及待機／行走動作為本專案在 Blender 製作。製作腳本：`scripts/build-characters-v3.py`（本機來源專案）。輸出 glTF 2.0 GLB，正面 +Z、向上 +Y，模型與貼圖一併封裝；`Idle`、`Walk` 為可循環骨架動畫。以上來源與授權不以本案自製配件為由取消。
