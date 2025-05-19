FROM node:20-slim

# 必要最小限のパッケージのみインストール
RUN apt-get update && apt-get install -y \
    git \
    && rm -rf /var/lib/apt/lists/*

# ワークスペースディレクトリを作成
WORKDIR /workspace

# タイムゾーンを設定
ENV TZ=Asia/Tokyo

COPY . ./

RUN npm install -g pnpm

RUN rm -rf node_modules && pnpm install --no-optional --reporter=append-only