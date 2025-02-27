import columnsJSON from '../../mocks/columns.json'
import tasksJSON from '../../mocks/tasks.json'
import usersJSON from '../../mocks/users.json'
import { vi } from 'vitest'

// Функция vi.mock эмулирует все импорты в модулях. Вызов vi.mock всплывает в коде и всегда будет выполняться перед остальными импортами.
vi.mock('@/services', () => {
  return {
    columnsService: {
      // В версии Node.js 17+ можно использовать structuredClone для глубокого клонирования
      // используем vi.fn, инициализируем эмуляцию функции или метода. Аргументом функции является колбэк, который будет возвращён при её вызове. Если аргумент не указан, функция вернёт undefined при вызове.
      fetchColumns: vi.fn(async () => {
        return await JSON.parse(JSON.stringify(columnsJSON))
      }),
      createColumn: vi.fn(async () => ({ id: 6 })),
      updateColumns: vi.fn(),
      deleteColumns: vi.fn()
    },
    tasksService: {
      fetchTasks: vi.fn(async () => JSON.parse(JSON.stringify(tasksJSON)))
    },
    userService: {
      fetchUsers: vi.fn(async () => {
        return await JSON.parse(JSON.stringify(usersJSON))
      })
    }
  }
})
