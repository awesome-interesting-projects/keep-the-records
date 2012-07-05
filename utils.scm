(use srfi-1)

(define (insert-file path)
  (with-input-from-file path (lambda () (read-string))))

(define (fold-sep proc sep start list)
  (let ((first #t))
    (fold (lambda (e o)
            (string-append o (if first (begin (set! first #f) "") sep) (proc e)))
          start
          list)))

(define (string-fold-sep proc sep list)
  (fold-sep proc sep "" list))

(define (range from/to . to)
  (let ((f (if (= (length to) 0) -1 (- from/to 1)))
        (t (if (> (length to) 0) (first to) from/to)))
    (do ((i (- t 1) (- i 1))
         (l '() (cons i l)))
        ((= i f) l))))

(define (empty? l) (eq? l '()))

(define (dash->space s)
  (string-fold (lambda (c o) (string-append o (if (char=? #\- c) " " (->string c)))) "" s))

(define (space->dash s)
  (string-fold (lambda (c o) (string-append o (if (char=? #\space c) "-" (->string c)))) "" s))

(define (id->name id)
  (string-titlecase (dash->space id)))

(define (name->id name)
  (string-downcase (space->dash name)))

(define (list->path list)
  (fold (lambda (e o)
          (string-append o (db:sep) e))
        ""
        list))
