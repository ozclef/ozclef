# Inicio rápido para repositorios

Obtenga información sobre cómo crear un nuevo repositorio y confirmar el primer cambio en 5 minutos.

## Creación de un repositorio

Los repositorios de GitHub almacenan una variedad de proyectos. En esta guía, creará un repositorio y confirmará el primer cambio.

<div class="ghd-tool webui">

1. En la esquina superior derecha de cualquier página, selecciona <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-plus" aria-label="Create something new" role="img"><path d="M7.75 2a.75.75 0 0 1 .75.75V7h4.25a.75.75 0 0 1 0 1.5H8.5v4.25a.75.75 0 0 1-1.5 0V8.5H2.75a.75.75 0 0 1 0-1.5H7V2.75A.75.75 0 0 1 7.75 2Z"></path></svg> y luego haz clic en **Nuevo repositorio**.

   ![Captura de pantalla del menú desplegable GitHub que muestra las opciones para crear nuevos elementos. El elemento de menú "New repository" está resaltado en naranja oscuro.](/assets/images/help/repository/repo-create-global-nav-update.png)
2. Escriba un nombre corto y fácil de recordar para el repositorio. Por ejemplo: "hola-mundo".

   ![Recorte de pantalla del primer paso para crear un repositorio. El campo "Repository name" contiene el texto "hello-world" y aparece en naranja oscuro.](/assets/images/help/repository/create-repository-name.png)
3. Opcionalmente, puede agregar una descripción del repositorio. Por ejemplo, "Mi primer repositorio en GitHub".
4. Elige la visibilidad del repositorio. Para más información, consulta [Acerca de los repositorios](/es/repositories/creating-and-managing-repositories/about-repositories#about-repository-visibility).
5. Cambie **Agregar README** a **Activado**.
6. Haga clic en **Create repository** (Crear repositorio).

Felicidades. Ha creado correctamente su primer repositorio y lo ha inicializado con un archivo *README*.

</div>

<div class="ghd-tool cli">

> \[!NOTE]
> Para más información sobre GitHub CLI, consulta [Acerca de GitHub CLI](/es/github-cli/github-cli/about-github-cli).

1. En la línea de comandos, navega al directorio en donde te gustaría crear un clon local de tu proyecto nuevo.
2. Para crear un repositorio para el proyecto, use el subcomando `gh repo create`. Cuando se le solicite, seleccione **Crear un nuevo repositorio en GitHub desde cero** y escriba el nombre del nuevo proyecto. Si quieres que tu proyecto pertenezca a una organización en lugar de a tu cuenta personal, especifica el nombre de la organización y del proyecto con `organization-name/project-name`.
3. Sigue los mensajes interactivos. Para clonar el repositorio localmente, confirma que sí cuando se te pregunte si quisieras clonar el directorio remoto del proyecto.
4. Como alternativa, para omitir los mensajes interactivos, proporcione el nombre del repositorio y una marca de visibilidad (`--public`, `--private` o `--internal`). Por ejemplo: `gh repo create project-name --public`. Para clonar el repositorio localmente, pase la marca `--clone`. Para obtener más información sobre los posibles argumentos, consulte el manual de la CLI de [GitHub](https://cli.github.com/manual/gh_repo_create).

</div>

## Confirma tu primer cambio

<div class="ghd-tool webui">

Una [confirmación](/es/get-started/learning-about-github/github-glossary#commit) es como una instantánea de todos los archivos del proyecto en un momento dado.

Cuando creaste tu nuevo repositorio, lo inicializaste con un archivo *README*. Los archivos *Léame* son un buen lugar para describir el proyecto con más detalle o bien agregar documentación, como instrucciones de instalación o uso del proyecto. El contenido del archivo *Léame* se muestra automáticamente en la página principal del repositorio.

Vamos a confirmar un cambio en el archivo Léame.

1. En la lista de archivos del repositorio, seleccione **README.md**.

![Captura de pantalla de una lista de archivos en un repositorio. Un nombre de archivo, "README.md", aparece resaltado con un contorno naranja.](/assets/images/help/repository/create-commit-open-readme.png)

1. En la esquina superior derecha de la vista de archivos, haz clic en <svg version="1.1" width="16" height="16" viewBox="0 0 16 16" class="octicon octicon-pencil" aria-label="Edit file" role="img"><path d="M11.013 1.427a1.75 1.75 0 0 1 2.474 0l1.086 1.086a1.75 1.75 0 0 1 0 2.474l-8.61 8.61c-.21.21-.47.364-.756.445l-3.251.93a.75.75 0 0 1-.927-.928l.929-3.25c.081-.286.235-.547.445-.758l8.61-8.61Zm.176 4.823L9.75 4.81l-6.286 6.287a.253.253 0 0 0-.064.108l-.558 1.953 1.953-.558a.253.253 0 0 0 .108-.064Zm1.238-3.763a.25.25 0 0 0-.354 0L10.811 3.75l1.439 1.44 1.263-1.263a.25.25 0 0 0 0-.354Z"></path></svg> para abrir el editor de archivos.
   ![Captura de pantalla de un archivo. En el encabezado, un botón (etiquetado con un icono de lápiz) está resaltado en naranja oscuro.](/assets/images/help/repository/edit-file-edit-button.png)

2. En el cuadro de texto, escriba alguna información personal.

3. Encima del nuevo contenido, haz clic en **Vista previa**.

   ![Captura de pantalla de un archivo en modo de edición. Encima del contenido del archivo, una pestaña etiquetada "Vista previa" está resaltada en naranja oscuro.](/assets/images/help/repository/edit-readme-preview-changes.png)

4. Revisa los cambios que realizaste en el archivo. Si seleccionas **Mostrar diferencia**, verás el contenido nuevo en verde.

![Recorte de pantalla de la vista previa de un archivo. La casilla "Mostrar diferencias" está habilitada y las adiciones al archivo se muestran con una línea verde. Ambas están delineadas en naranja.](/assets/images/help/repository/create-commit-review.png)

1. Haga clic en **Confirmar cambios**.

2. En el campo de "Mensaje de confirmación", escriba un mensaje de confirmación corto y significativo que describa la modificación que hizo en el archivo. Puedes atribuir el cambio a mas de un autor en el mensaje del mismo. Para más información, consulta [Creación de un commit con varios autores o en nombre de una organización](/es/pull-requests/how-tos/commit-changes/creating-a-commit-with-multiple-authors).

3. Debajo de los campos para el mensaje de confirmación, decide si deseas agregar tu confirmación a la rama actual o a una rama nueva. Debajo de los campos del mensaje de confirmación, decide si deseas agregar tu confirmación a la rama actual o a una nueva rama. Si tu rama actual es la rama predeterminada, debes elegir crear una nueva rama para tu confirmación y después crear una solicitud de extracción. Para más información, consulta [Crear una solicitud de incorporación de cambios](/es/pull-requests/how-tos/create-pull-requests/creating-a-pull-request).

   ![Captura de pantalla de una solicitud de extracción de GitHub que muestra un botón de opción para hacer la confirmación directamente en la rama principal o para crear una nueva rama. Aparece seleccionada la opción de rama nueva.](/assets/images/help/repository/choose-commit-branch.png)

4. Haz clic en **Confirmar cambios** o **Proponer cambios**.

</div>

<div class="ghd-tool cli">

Ahora que creaste un proyecto, puedes comenzar a confirmar cambios.

Los archivos *Léame* son un buen lugar para describir el proyecto con más detalle o bien agregar documentación, como instrucciones de instalación o uso del proyecto. El contenido del archivo *Léame* se muestra automáticamente en la página principal del repositorio. Siga estos pasos para agregar un archivo *README*.

1. En la línea de comandos, navega al directorio raíz de tu proyecto nuevo. (Este directorio se ha creado cuando ha ejecutado el comando `gh repo create`).

2. Cree un archivo *README* con información sobre el proyecto.

   ```shell
   echo "info about this project" >> README.md
   ```

3. Escriba `git status`. Verá que tiene un archivo `README.md` no rastreado.

   ```shell
   $ git status

   Untracked files:
     (use "git add <file>..." to include in what will be committed)
     README.md

   nothing added to commit but untracked files present (use "git add" to track)
   ```

4. Prueba y confirma el archivo.

   ```shell
   git add README.md && git commit -m "Add README"
   ```

5. Sube los cambios a tu rama.

   ```shell
   git push --set-upstream origin HEAD
   ```

</div>

## Pasos siguientes

Has creado un repositorio, incluido un archivo *Léame*, y su primera confirmación en GitHub.

<div class="ghd-tool webui">

* Ahora puede clonar un repositorio de GitHub para crear una copia local en su equipo. Desde tu repositorio local, puedes hacer commit y crear un pull request para actualizar los cambios en el repositorio de origen. Para más información, consulta [Clonar un repositorio](/es/repositories/creating-and-managing-repositories/cloning-a-repository) y [Configuración de Git](/es/get-started/git-basics/set-up-git).

</div>

* Protege el repositorio con las características de seguridad disponibles de GitHub. Para más información, consulta [Inicio rápido para proteger el repositorio](/es/code-security/getting-started/quickstart-for-securing-your-repository).

* Puede encontrar proyectos y repositorios interesantes en GitHub y realizar cambios en ellos mediante la creación de una bifurcación del repositorio. La bifurcación de un repositorio te permitirá realizar cambios en otro repositorio sin afectar al original. Para más información, consulta [Bifurcar un repositorio](/es/pull-requests/how-tos/work-with-forks/fork-a-repo).

* Cada repositorio de GitHub es propiedad de una persona o una organización. Puede interactuar con las personas, los repositorios y las organizaciones mediante la conexión y el seguimiento de ellos en GitHub. Para más información, consulta [Detección de proyectos en GitHub](/es/get-started/exploring-projects-on-github/discovering-projects-on-github).

* GitHub tiene una excelente comunidad de soporte técnico en la que puede pedir ayuda y hablar con usuarios de todo el mundo. Únete a la conversación en [GitHub Community](https://github.com/orgs/community/discussions).
