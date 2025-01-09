export const openUploadFileWindow = async (): Promise<string | null> => {
    try {
      // Открыть окно выбора файла с помощью File Picker API
      const [fileHandle] = await (window as any).showOpenFilePicker({
        types: [
          {
            description: 'Images',
            accept: { 'image/*': ['.jpeg', '.jpg', '.png', '.gif'] },
          },
        ],
        multiple: false, // Запрет выбора нескольких файлов
      })

      // Получить доступ к выбранному файлу
      const file = await fileHandle.getFile()

      // Проверить, является ли файл изображением
      if (file.type.startsWith('image/')) {
        const blobUrl = URL.createObjectURL(file) // Создать Blob URL

        return blobUrl // Сохранить Blob URL в состояние
      } else {
        alert('Пожалуйста, выберите изображение.')
        return null
      }
    } catch (error) {
      console.error('Файл не был выбран или произошла ошибка:', error)
      return null
    }
  }