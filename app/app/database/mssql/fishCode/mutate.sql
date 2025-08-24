CREATE PROCEDURE AddFishCode
	  @name NVARCHAR(255),
	  @size NVARCHAR(255),
	  @remain NVARCHAR(255),
	  @money NVARCHAR(255),
	  @detail NVARCHAR(MAX),
	  @userId INT
AS
BEGIN
	SET NOCOUNT ON;

	INSERT INTO fishCode (name, size, remain, money, detail, status, userId)
	OUTPUT INSERTED.*
	VALUES (@name, @size, @remain, @money, @detail, 'normal', @userId);
END;