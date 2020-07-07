# ⚛️ React / React.memo, useMemo, and useCallback Optimizations

▶️ [React.memo, useMemo, and useCallback Optimizations - YouTube](https://www.youtube.com/watch?v=4BranN3qnDU) - Code Bushi

参考記事: 
 [When to useMemo and useCallback](https://kentcdodds.com/blog/usememo-and-usecallback)

## ✅再レンダリング防ぐ為の注意点

- 子コンポーネント
- 子コンポーネントへのprops: 関数・オブジェクト・配列

`定義をコンポーネント外に出すことで、再レンダリング防げる？`