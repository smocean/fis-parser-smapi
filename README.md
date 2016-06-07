# fis-parser-w3c-sm
============================

## 安装与使用

全局安装

```bash
npm install fis-parser-w3c-sm -g
```

## 配置
```
fis.config.merge({
    modules: { parser: { js: 'w3c-sm' } },
    settings: {
        parser: {
            'w3c-sm': {
                patterns: [{
                        pattern: 'navigator.geolocation.getCurrentPosition',
                        replacement: 'sm.uc_getCurrentPosition'
                    }],
                exclude: null
            }
        }
    }
});
```
