module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // 新機能
        'fix', // バグ修正
        'docs', // ドキュメント
        'style', // コードスタイル（動作に影響なし）
        'refactor', // リファクタリング
        'perf', // パフォーマンス改善
        'test', // テスト
        'build', // ビルドシステム
        'ci', // CI設定
        'chore', // その他の変更
        'revert', // コミット取り消し
      ],
    ],
    'subject-case': [0], // 日本語対応のため無効化
  },
};
