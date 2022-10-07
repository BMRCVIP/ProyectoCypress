 describe('login', () => {
    it('SesionIncorrecta', () => {
        cy.visit('https://localhost:44320/Auth/Login')
        cy.get ('[name=Username]').type('BMRC');
        cy.get ('[name=Password]').type('bmrc');
        cy.get ('#iniciarSesion').click();
    })
    it('SesionCorrecta', () => {
        cy.visit('https://localhost:44320/Auth/Login')
        cy.get ('[name=Username]').type('Admin');
        cy.get ('[name=Password]').type('Admin');
        cy.get ('#iniciarSesion').click();
    })
  });

  describe('pantallaPrincipal', () => {
    it('AccederLibros', () => {
      cy.visit('https://localhost:44320/')
    })
    it('AccederPrimerLibro', () => {
        cy.visit('https://localhost:44320/Auth/Login')
        cy.get ('[name=Username]').type('Admin');
        cy.get ('[name=Password]').type('Admin');
        cy.get ('#iniciarSesion').click();
        cy.visit('https://localhost:44320/Libro/Details?id=2')
        cy.get ('[name=Texto]').type('Buen, No me gustaaaaaaaaaaaaaaa');
        cy.get ('[name=Puntaje]').type('1');
        cy.get ('#enviarComentario').click();
      })
    it('AccederSegundoLibro', () => {
        cy.visit('https://localhost:44320/Auth/Login')
        cy.get ('[name=Username]').type('Admin');
        cy.get ('[name=Password]').type('Admin');
        cy.get ('#iniciarSesion').click();
        cy.visit('https://localhost:44320/Libro/Details?id=4')
        cy.get ('[name=Texto]').type('Buen libro, sube más por favor, eres un crack');
        cy.get ('[name=Puntaje]').type('5');
        cy.get ('#enviarComentario').click();
      })
    it('AccederTercerLibro', () => {
        cy.visit('https://localhost:44320/Auth/Login')
        cy.get ('[name=Username]').type('Admin');
        cy.get ('[name=Password]').type('Admin');
        cy.get ('#iniciarSesion').click();
        cy.visit('https://localhost:44320/Libro/Details?id=5')
        cy.get ('[name=Texto]').type('Buen libro, eres un crack');
        cy.get ('[name=Puntaje]').type('2');
        cy.get ('#enviarComentario').click();
      })
    it('AccederCuartoLibro', () => {
        cy.visit('https://localhost:44320/Auth/Login')
        cy.get ('[name=Username]').type('Admin');
        cy.get ('[name=Password]').type('Admin');
        cy.get ('#iniciarSesion').click();
        cy.visit('https://localhost:44320/Libro/Details?id=6')
        cy.get ('[name=Texto]').type('no me gusta');
        cy.get ('[name=Puntaje]').type('1');
        cy.get ('#enviarComentario').click();
      })
  });

  describe('MiBiblioteca', () => {
    it('SeleccionarEstadoTerminado', () => {
        cy.visit('https://localhost:44320/Auth/Login')
        cy.get ('[name=Username]').type('Admin');
        cy.get ('[name=Password]').type('Admin');
        cy.get ('#iniciarSesion').click();
        cy.get('#agregar_bi').click()
        cy.visit('https://localhost:44320/Biblioteca')
        cy.get ('#terminado').click();
        cy.get ('#leyendo').click();
    })
  });

  describe('ComentariosLibro', () => {
    it('VerComentariosPrimerLibro', () => {
        cy.visit('https://localhost:44320/Libro/Details?id=2')
    }) 
    it('VerComentariosSegundoLibro', () => {
        cy.visit('https://localhost:44320/Libro/Details?id=4')
    })
    it('VerComentariosTercerLibro', () => {
        cy.visit('https://localhost:44320/Libro/Details?id=5')
    })
    it('VerComentariosCuartoLibro', () => {
        cy.visit('https://localhost:44320/Libro/Details?id=6')
    })
  });
