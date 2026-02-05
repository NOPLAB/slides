# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

MarpベースのMarkdownスライドプレゼンテーションリポジトリ。MarkdownファイルをHTML、PDF、PPTXに変換する。

## ビルドコマンド

ローカルでMarp CLIを使用してビルド:

```bash
# HTMLに変換
marp README.md -o build/index.html

# PDFに変換
marp README.md --allow-local-files -o build/README.pdf

# PowerPointに変換
marp README.md --allow-local-files -o build/README.pptx

# docs/ディレクトリ内の全スライドをビルド
marp -I docs/ -o build/docs/
```

Docker経由でのビルド:
```bash
docker run --rm -v $PWD:/home/marp/app marpteam/marp-cli README.md -o build/index.html
```

## ディレクトリ構成

- `README.md` - メインスライド（ルート）
- `docs/` - 追加スライド用ディレクトリ
- `img/` - 画像ファイル（存在する場合、ビルド時にコピーされる）
- `build/` - ビルド出力先（Git管理外）

## CI/CD

mainブランチへのプッシュでGitHub Actionsが自動実行され、GitHub Pagesにデプロイされる。
