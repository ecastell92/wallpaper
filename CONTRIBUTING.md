# 🤝 Guía de Contribución

¡Gracias por tu interés en contribuir a WallAI Generator! 🎨

## 📋 Cómo Contribuir

### 1. Fork el Repositorio
```bash
# Haz fork del repo en GitHub
# Luego clona tu fork:
git clone https://github.com/tu-usuario/wallpaper-ai.git
cd wallpaper-ai
```

### 2. Crear una Rama
```bash
# Crea una rama para tu feature
git checkout -b feature/nueva-funcionalidad

# O para un bugfix:
git checkout -b fix/corregir-bug
```

### 3. Hacer Cambios

**Asegúrate de:**
- ✅ Seguir el estilo de código existente
- ✅ Comentar código complejo
- ✅ Probar tus cambios
- ✅ Actualizar la documentación si es necesario

### 4. Commit
```bash
# Hacer commit con mensaje descriptivo
git add .
git commit -m "feat: agregar nueva funcionalidad X"

# Usa estos prefijos:
# feat: nueva funcionalidad
# fix: corrección de bug
# docs: cambios en documentación
# style: formateo, puntuación, etc
# refactor: refactorización de código
# test: agregar tests
# chore: mantenimiento
```

### 5. Push y Pull Request
```bash
# Push a tu fork
git push origin feature/nueva-funcionalidad

# Luego crea un Pull Request en GitHub
```

## 🎯 Áreas para Contribuir

### 🐛 Bugs
- Revisa los Issues abiertos
- Reporta nuevos bugs con detalles
- Propón soluciones

### ✨ Features
- Nuevos proveedores de IA
- Mejoras en la UI
- Optimizaciones de performance
- Nuevas categorías de wallpapers

### 📖 Documentación
- Mejorar guías existentes
- Traducir a otros idiomas
- Agregar ejemplos
- Corregir typos

### 🧪 Testing
- Agregar tests unitarios
- Tests de integración
- Mejorar cobertura

## 💻 Configuración de Desarrollo

```bash
# Instalar dependencias
npm install

# Copiar .env de ejemplo
cp .env.example .env

# Ejecutar en modo desarrollo
npm run dev

# Ejecutar tests
npm test
```

## 📏 Estándares de Código

### JavaScript/Node.js
- Usar ES6+ features
- Async/await en lugar de callbacks
- Nombres descriptivos de variables
- Funciones pequeñas y enfocadas

### React
- Componentes funcionales
- Hooks modernos
- PropTypes o TypeScript
- Evitar prop drilling

### API
- RESTful design
- Códigos HTTP apropiados
- Manejo de errores completo
- Validación de inputs

## 🔍 Proceso de Review

1. **Revisión automática** - CI/CD checks
2. **Revisión de código** - Un maintainer revisará
3. **Cambios solicitados** - Si es necesario
4. **Merge** - Una vez aprobado

## 📝 Reportar Bugs

**Incluye:**
- Descripción clara del problema
- Pasos para reproducir
- Comportamiento esperado vs actual
- Screenshots si aplica
- Sistema operativo y versión de Node.js

**Template:**
```markdown
**Descripción del Bug:**
[Descripción clara]

**Pasos para Reproducir:**
1. Ir a '...'
2. Click en '....'
3. Ver error

**Comportamiento Esperado:**
[Qué debería pasar]

**Comportamiento Actual:**
[Qué está pasando]

**Screenshots:**
[Si aplica]

**Entorno:**
- OS: [e.g. macOS 13.0]
- Node: [e.g. 18.0.0]
- Navegador: [e.g. Chrome 120]
```

## 💡 Sugerir Features

**Incluye:**
- Descripción de la feature
- Por qué es útil
- Posible implementación
- Ejemplos de uso

## ⚖️ Código de Conducta

- 🤝 Sé respetuoso y constructivo
- 💬 Comunicación clara y profesional
- 🌍 Acoge la diversidad
- 🎯 Enfócate en lo mejor para el proyecto
- 🚫 No toleramos acoso o discriminación

## 🎉 Reconocimientos

Los contribuidores serán:
- Listados en CONTRIBUTORS.md
- Mencionados en releases
- Parte de la comunidad

## 📞 Contacto

- GitHub Issues: Para bugs y features
- Discussions: Para preguntas generales
- Email: Para asuntos privados

## 📄 Licencia

Al contribuir, aceptas que tu código esté bajo la misma licencia MIT del proyecto.

---

**¡Gracias por hacer WallAI Generator mejor! 🚀**