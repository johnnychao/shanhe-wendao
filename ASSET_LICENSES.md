# 山河問道 v0.3｜素材來源與授權

查核日期：2026-09-11。素材隨站本機載入，遊玩時不向來源平台下載。以下記錄使用來源與衍生處理，不替整個專案指定新的授權。

## 自然環境：Poly Haven，CC0

[Poly Haven 官方授權](https://polyhaven.com/license)允許使用、修改及再散布其 CC0 模型與材質，包含商業用途。本案保留來源供追溯。

| 原始資產 | `assets/` 下的成品 | 衍生處理 |
|---|---|---|
| [Fern 02](https://polyhaven.com/a/fern_02) | `models/nature/fern.glb` | 選單株、合併 mesh、1K 貼圖、透明葉片與腳底原點 |
| [Grass Medium 01](https://polyhaven.com/a/grass_medium_01) | `models/nature/grass.glb` | 選小型草束、保留透明度、統一大小 |
| [Rock Moss Set 01](https://polyhaven.com/a/rock_moss_set_01) | `models/nature/rock.glb` | 選單塊岩石、合併與標準化原點 |
| [Island Tree 02](https://polyhaven.com/a/island_tree_02) | `models/nature/tree.glb`、`textures/tree-impostor.png` | 枝幹減面、葉片保留 UV 與透明度後減密度；遠景樹冠另由模型渲染為透明圖 |
| [Forest Ground 04](https://polyhaven.com/a/forest_ground_04) | `textures/ground-color.jpg`、`ground-normal.jpg` | 1K diffuse 與 OpenGL normal 貼圖 |
| [Mossy Rock](https://polyhaven.com/a/mossy_rock) | `textures/rock-color.jpg`、`rock-normal.jpg` | 1K diffuse 與 OpenGL normal 貼圖 |

模型作者記錄：`assets/models/nature/LICENSE.txt`。蕨、草與樹為 Rob Tuytel、Rico Cilliers；岩石為 Kless Gyzen。處理腳本：`scripts/build-nature.py`、`scripts/build-tree-impostor.py`。原始 glTF、bin、貼圖與製作驗證在本機 `output/asset-sources/nature/`，不發布。

## 3D 角色：MakeHuman／MPFB 核心資產，CC0

`assets/models/characters/male.glb`、`female.glb` 使用 CC0 人體、亞洲青年形態、皮膚、眼球、眉睫、骨架及權重。衣袍、交領、腰封、玉佩、靴子、髮髻與 Idle／Walk 動作由本專案在 Blender 製作。可見人體保留原 UV，衣物遮蔽表面不輸出，貼圖縮小後封入 GLB。

- [MPFB 官方授權](https://github.com/makehumancommunity/mpfb2/blob/master/LICENSE.md)與 [CC0 資產全文](https://github.com/makehumancommunity/mpfb2/blob/master/LICENSE.ASSETS.md)。核心資產與工具程式本身的 GPL／AGPL 授權分開。
- [官方 CC0 系統素材包](https://files.makehumancommunity.org/asset_packs/makehuman_system_assets/makehuman_system_assets_cc0.zip)及[逐項授權清單](https://static.makehumancommunity.org/assets/assetpacks/makehuman_system_assets.html)。
- 逐檔來源與規格：`assets/models/characters/ATTRIBUTION.md`；本機授權：`assets/licenses/MakeHuman-LICENSE.md`；製作腳本：`scripts/build-characters.py`。

以上兩個模型為 v0.2 保留版本。沒有使用《逆水寒》的模型、貼圖或角色；3D 旅人與 AI 人物肖像分開製作。

## v0.3 四位人物與社群衣髮

`assets/models/characters/v3/` 包含沈行舟、阿澄、小衡、知秋四款 GLB；場內及人物誌共用同一檔案。人體仍採上述 MakeHuman CC0 核心資產，衣髮採逐檔查核的以下來源。

| 素材 | 作者與授權 | 本案修改 |
|---|---|---|
| [F_Kimono／mindfront_kimono](https://static.makehumancommunity.org/assets/assetpacks/dress01.html) | Mindfront，CC0 1.0；官方與內嵌一致 | 體型適配、衣物蒙皮、袖形、衣領、腰封、配色；保留原布料拓樸與 UV 皺褶 |
| [Long01／o4saken_long01](https://static.makehumancommunity.org/assets/assetpacks/hair01.html) | 04saken；官方包另署 punkduck；按內嵌 **CC BY 4.0** 使用 | 髮束適配、長短與位置、髮色、透明度及反光、綁定頭骨 |

Long01 的包頁雖標 CC0，下載檔內為 CC BY 4.0；本案採檔內條款，保留作者、[授權連結](https://creativecommons.org/licenses/by/4.0/)與修改紀錄，不暗示原作者替遊戲背書。RehmanPolanski bun 的授權矛盾未釐清，未採用；Cortu Johnstone CC0 髮片因造型不適合，只留本機候選。

詳細署名及原包連結見 `assets/models/characters/v3/ATTRIBUTION.md`。製作腳本 `scripts/build-characters-v3.py`；原包、失敗候選、下載雜湊及圖像驗證留本機 `output/character-research/` 與 `output/character-v3/`。原衣袍名為 Kimono，修改後用作虛構江湖旅装，不宣稱原素材為漢服或歷史服制復原。Idle／Walk 為本案骨架動畫，尚無臉部表情、嘴型或布料即時物理。

## 環境音與字型

| 素材 | 官方／作者來源 | 授權與本機位置 |
|---|---|---|
| Forest Ambience | TinyWorlds；[作者發布頁](https://opengameart.org/content/forest-ambience)、[MP3 原檔](https://opengameart.org/sites/default/files/Forest_Ambience.mp3) | 頁面明列 CC0；另存 `assets/audio/forest.mp3`，點選後循環播放 |
| Iansui 芫荽 | [ButTaiwan／Iansui](https://github.com/ButTaiwan/iansui) | [SIL OFL 1.1](https://github.com/ButTaiwan/iansui/blob/main/OFL.txt)；全文 `assets/licenses/Iansui-OFL.txt`；原字型 `assets/fonts/Iansui-Regular.ttf`，子集 `Iansui-game.woff` |

字型衍生版本仍依 OFL 散布，保留作者及條款，不將字型單獨出售。系統備援字型只引用裝置已有字型，不散布其檔案。

## 原創與 AI 輔助視覺

`assets/art/academy.png` 是 AI 生成的江湖書院概念圖，用於 WebGL 失效備援；`assets/art/cast.png` 是四位虛構人物的 AI 生成肖像圖集。不是真人照片、手繪作品、場內 3D 截圖或第三方 CC0 圖片。

建築、亭橋、地形配置、水道、光霧、介面及教學故事由本專案製作；自然模型與人物基底仍依上述來源追溯。此版採武俠擬真方向，不宣稱商業大型遊戲品質。

## 教材與程式依賴

`src/dataset.ts` 為 seed=20260911 的合成資料，24 個案、7 變項，不是真實學生或研究資料。參考 Syntax 尚未在 SPSS22 實跑。原課綱與教科書僅受控本機參考，不放公開版本。

依賴以 `package-lock.json` 為準；React、React DOM、Three.js、fflate 與建置工具各依自身 LICENSE，不以素材 CC0 概括。`THIRD_PARTY_LICENSES.txt` 為彙整檔，公開打包前核對新增依賴及原授權。`node_modules/` 不納入交接包，依鎖檔安裝後可查各套件原 LICENSE。
