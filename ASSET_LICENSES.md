# 山河問道 v0.2｜素材來源與授權

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

沒有使用《逆水寒》的模型、貼圖或角色。兩款 3D 旅人是本案原型，不等同四張人物誌肖像。

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
