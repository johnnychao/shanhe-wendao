# 武俠旅人角色來源與授權

`male.glb`、`female.glb`：以 MakeHuman / MPFB 的 CC0 人體、亞洲青年形態、皮膚、眼球、眉毛、睫毛、骨架與權重為基底；衣袍、交領、腰封、玉佩、靴子、髮髻、髮束與 Idle / Walk 動作由本專案在 Blender 中製作。

這是本專案原創武俠旅人設計，未使用《逆水寒》的模型、貼圖或角色造型。

## 官方來源

- [MPFB 官方資產授權說明](https://github.com/makehumancommunity/mpfb2/blob/master/LICENSE.md)：核心 mesh、target、材質、貼圖與 JSON 資料採 CC0；程式本身的 GPL 授權另計。
- [CC0 1.0 完整條款](https://github.com/makehumancommunity/mpfb2/blob/master/LICENSE.ASSETS.md)。
- [官方系統素材包逐項授權清單](https://static.makehumancommunity.org/assets/assetpacks/makehuman_system_assets.html)。
- [官方 CC0 系統素材包](https://files.makehumancommunity.org/asset_packs/makehuman_system_assets/makehuman_system_assets_cc0.zip)。
- [人體 base.obj](https://raw.githubusercontent.com/makehumancommunity/mpfb2/master/src/mpfb/data/3dobjs/base.obj)。
- [亞洲男性青年 target](https://raw.githubusercontent.com/makehumancommunity/mpfb2/master/src/mpfb/data/targets/macrodetails/asian-male-young.target.gz)、[亞洲女性青年 target](https://raw.githubusercontent.com/makehumancommunity/mpfb2/master/src/mpfb/data/targets/macrodetails/asian-female-young.target.gz)。
- [game_engine 骨架](https://raw.githubusercontent.com/makehumancommunity/mpfb2/master/src/mpfb/data/rigs/standard/rig.game_engine.json)、[頂點權重](https://raw.githubusercontent.com/makehumancommunity/mpfb2/master/src/mpfb/data/rigs/standard/weights.game_engine.json)。

## 系統素材包中使用的檔案

- `skins/young_asian_male/young_lightskinned_male_diffuse3.png`
- `skins/young_asian_female/young_lightskinned_female_diffuse3.png`
- `eyes/high-poly/high-poly.obj`、`high-poly.mhclo`
- `eyes/materials/brown_eye.png`
- `eyebrows/eyebrow001/eyebrow001.obj`、`.mhclo`、`.png`
- `eyelashes/eyelashes01/eyelashes01.obj`、`.mhclo`、`.png`

完整皮膚依原始 UV 使用，僅縮小尺寸並封裝；眼球與眉睫依官方三頂點對應資訊套用。衣物覆蓋的身體表面不輸出。CC0 來源允許商業使用與再散布，這份來源記錄保留供維護者追溯。原始素材包與製作中間檔保留於本機 `output/asset-sources/`，不放入公開網站。

## 使用規格

glTF 2.0 GLB；正面 +Z，向上 +Y；人體基底 1.70 公尺，含髮髻總高約 1.78 公尺。`Idle` 3 秒，`Walk` 1.25 秒，均可循環。以 Three.js `SkeletonUtils.clone` 複製角色，再為每名角色建立獨立 `AnimationMixer`。
