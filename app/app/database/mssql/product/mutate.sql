CREATE PROCEDURE AddProduct
	  @title NVARCHAR(255),
	  @image NVARCHAR(255),
	  @name NVARCHAR(255),
	  @size NVARCHAR(255),
	  @amount NVARCHAR(255),
	  @sold NVARCHAR(255),
	  @discount NVARCHAR(255),
	  @price NVARCHAR(255),
	  @status NVARCHAR(255),
	  @userId INT,
	  @fishCodeId INT
AS
BEGIN
	SET NOCOUNT ON;

	INSERT INTO product (title, image, name, size, amount, sold, discount, price, status, userId, fishCodeId)
	OUTPUT INSERTED.*
	VALUES (@title, @image, @name, @size, @amount, @sold, @discount, @price, 'normal', @userId, @fishCodeId);
END;