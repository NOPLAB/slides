module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // 新機能
        'fix', // バグ修正
        'docs', // ドキュメントのみの変更
        'style', // コードの意味に影響を与えない変更（空白、フォーマットなど）
        'refactor', // バグ修正でも機能追加でもないコード変更
        'perf', // パフォーマンス向上のためのコード変更
        'test', // テストの追加や既存テストの修正
        'build', // ビルドシステムや外部依存関係に影響する変更
        'ci', // CI設定ファイルやスクリプトの変更
        'chore', // その他の変更（srcやtestを変更しない）
        'revert', // 以前のコミットを取り消す
      ],
    ],
    'subject-case': [0], // 日本語のコミットメッセージを許可
  },
};
